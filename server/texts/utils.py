import re
from nltk.stem import WordNetLemmatizer
from words.models import Word


item_pattern = r"[\w']+|[\W]+|"
word_pattern = r"[\w']+|"


def split_text(text):
    return re.findall(item_pattern, text)


def process_text(text):
    wnl = WordNetLemmatizer()

    for item in split_text(text):
        if item.isalpha():
            try:
                word = Word.objects.get(lemma=wnl.lemmatize(item).upper())
            except Word.DoesNotExist:
                word = None

            yield {
                's': item,
                'instance': word
            }

        else:
            yield {
                's': item,
                'instance': None
            }
