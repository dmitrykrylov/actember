from django.dispatch import receiver
from django.db.models.signals import post_save
from .models import Text
from words.models import UserWord
from .utils import process_text


@receiver(post_save, sender=Text)
def text_to_json(sender, instance, **kwargs):
    post_save.disconnect(text_to_json, sender=sender)

    items = list(process_text(instance.original))

    instance.processed = {
        'strings': [
            {'id': i['instance'].id, 's': i['s']}
            if i['instance'] is not None
            else {'s': i['s']}
            for i in items
        ]
    }

    user_words = UserWord.objects.bulk_create(
        (
            UserWord(user=instance.user, word=i['instance'])
            for i in items
            if i['instance'] is not None
        )
    )

    instance.words = user_words
    instance.save()

    post_save.connect(text_to_json, sender=sender)
