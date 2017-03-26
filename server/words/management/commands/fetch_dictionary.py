import requests
from django.core.management import BaseCommand
from words.models import Word


JSON_URL = 'https://raw.githubusercontent.com/adambom/dictionary/master/dictionary.json'


class Command(BaseCommand):
    help = "Fetch dictionary"

    def handle(self, *args, **options):
        url = JSON_URL
        response = requests.get(url, stream=True)
        dictionary = response.json()

        Word.objects.bulk_create(self.__yield_words(dictionary))

    def __yield_words(self, dictionary):
        for key in dictionary.keys():
            yield Word(lemma=key, description=dictionary[key])
