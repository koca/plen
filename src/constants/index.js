export const LANGUAGE_DATABASE_NAME = "PLENDB";
export const LANGUAGE_TABLE = "language";
export const LANGUAGE_SEARCH_KEY = ["en", "pl"];
export const LANGUAGE_DATABASE_SCHEMA = { [LANGUAGE_TABLE]: "++id,en,pl" };

export const ITEM_LIMIT = 50;
export const DEFAULT_INTERNATIONALIZE_EXPAND_REGEXES = [
  {
    regex: /[åäàáâãæą]/gi,
    alternate: "a"
  },
  {
    regex: /[èéêëę]/gi,
    alternate: "e"
  },
  {
    regex: /[ìíîï]/gi,
    alternate: "i"
  },
  {
    regex: /[òóôõö]/gi,
    alternate: "o"
  },
  {
    regex: /[ùúûü]/gi,
    alternate: "u"
  },
  {
    regex: /[æ]/gi,
    alternate: "ae"
  },
  {
    regex: /[ć]/gi,
    alternate: "c"
  },
  {
    regex: /[ł]/gi,
    alternate: "l"
  },
  {
    regex: /[ń]/gi,
    alternate: "n"
  },
  {
    regex: /[ó]/gi,
    alternate: "o"
  },
  {
    regex: /[ś]/gi,
    alternate: "s"
  },
  {
    regex: /[źż]/gi,
    alternate: "z"
  }
];
