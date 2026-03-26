self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/a20-constructions(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|_next\\/static|_next\\/image|images|favicon.ico|sitemap.xml|robots.txt).*))(\\.json)?[\\/#\\?]?$",
    "originalSource": "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()