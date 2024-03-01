# Release Notes

<!-- You should *NOT* be adding new change log entries to this file.
     You should create a file in the news directory instead.
     For helpful instructions, please see:
     https://6.docs.plone.org/contributing/index.html?highlight=towncrier#change-log-entry
-->

<!-- towncrier release notes start -->

## 1.0.0 (2024-03-01)

### Feature

- - rename blockquote `siteLang` attribute to `locale`
  - remove default languages & use available languages from plone's `SupportedContentLanguages` vocabulary instead [@jonaspiterek]
  - language drop down now show's "English" / "Deutsch" instead of just "en" and "de" (because of the used vocabulary) [@jonaspiterek] [#16](https://github.com/kitconcept/volto-quote-block/pull/16)

### Bugfix

- - fix hitting return not creating new default block (edit) [@jonaspiterek] [#15](https://github.com/kitconcept/volto-quote-block/pull/15)

### Internal

- - fix typo in german translations [@jonaspiterek] [#18](https://github.com/kitconcept/volto-quote-block/pull/18)

## 1.0.0-alpha.7 (2024-02-20)

### Feature

- - set quotation marks by site language [@jonaspiterek]
  - combine "language" and "cite" fields in new accessibility fieldset [@jonaspiterek] [#14](https://github.com/kitconcept/volto-quote-block/pull/14)

## 1.0.0-alpha.6 (2024-02-05)

### Bugfix

- - rename language field to quotationLanguage [@jonaspiterek] [#12](https://github.com/kitconcept/volto-quote-block/pull/12)

## 1.0.0-alpha.5 (2024-02-02)

### Bugfix

- - fix allowedLanguages config option [@jonaspiterek] [#10](https://github.com/kitconcept/volto-quote-block/pull/10)

## 1.0.0-alpha.4 (2024-02-02)

### Bugfix

- - fix name field beeing undefined if emtpy, rename field name to author [@jonaspiterek] [#7](https://github.com/kitconcept/volto-quote-block/pull/7)

## 1.0.0-alpha.3 (2024-01-30)

### Feature

- - implement inline text editor [@jonaspiterek] [#4](https://github.com/kitconcept/volto-quote-block/pull/4)
- - implement language selector to display typographical correct quotation marks for different languages [@jonaspiterek] [#5](https://github.com/kitconcept/volto-quote-block/pull/5)

## 1.0.0-alpha.2 (2024-01-12)

### Internal

- Add towncrier config @jonaspiterek [#3](https://github.com/kitconcept/volto-quote-block/pull/3)

## 1.0.0-alpha.1 (2024-01-09)

### Internal

- Add LICENSE @jonaspiterek [#2](https://github.com/kitconcept/volto-quote-block/pull/2)

## 1.0.0-alpha.0 (2024-01-09)

### Feature

- Initial release @jonaspiterek
