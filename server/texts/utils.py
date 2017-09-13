import re
from nltk.stem import WordNetLemmatizer
from words.models import Word
import time


item_pattern = r"[\w']+|[\W]+|"
word_pattern = r"[\w']+|"


def split_text(text):
    return re.findall(item_pattern, text)


def process_text(text):
    wnl = WordNetLemmatizer()
    start = time.time()

    for item in split_text(text):
        if item.isalpha():
            try:
                # Can return more than one word?
                word = Word.objects.filter(
                    lemma=wnl.lemmatize(item).upper())[0]
            except Word.DoesNotExist:
                word = None
            except IndexError:
                word = None

            yield {'s': item, 'instance': word}
        else:
            # Extract \n from strings.
            for subitem in list(chr(10).join(item.split(chr(10)))):
                yield {
                    's': subitem,
                    'instance': None
                }

    end = time.time()
    print('Text processing completed in {} s.'.format(end - start))
