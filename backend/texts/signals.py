import time
from django.dispatch import receiver
from django.db.models.signals import post_save
from .models import Text, TextWord
from users.models import UserWord
from .utils import process_text


@receiver(post_save, sender=Text)
def text_to_json(sender, instance, **kwargs):
    post_save.disconnect(text_to_json, sender=sender)
    items = list(process_text(instance.original))

    start = time.time()
    instance.processed = {
        'strings': [
            {'id': i['instance'].id, 's': i['s']}
            if i['instance'] is not None
            else {'s': i['s']}
            for i in items
        ]
    }

    user_words = [
        UserWord.objects.get_or_create(user=instance.user, word=i['instance'])[0]
        for i in items
        if i['instance'] is not None
    ]

    for word in user_words:
        text_word, created = TextWord.objects.get_or_create(text=instance,
                                                            user_word=word)
        if not created:
            text_word.count += 1
            text_word.save()

    end = time.time()
    print('Processed text data saved in {} s.'.format(end - start))

    instance.save()

    post_save.connect(text_to_json, sender=sender)
