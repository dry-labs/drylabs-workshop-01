FROM python:3.7

ENV PYTHONUNBUFFERED 1

RUN curl -sSL https://raw.githubusercontent.com/sdispater/poetry/master/get-poetry.py | python

RUN ln -s $HOME/.poetry/bin/poetry /usr/local/bin/poetry

RUN poetry config settings.virtualenvs.in-project true

WORKDIR /app
