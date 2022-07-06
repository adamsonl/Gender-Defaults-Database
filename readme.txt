README

The following are the list of different kinds of objects in the database, and the attributes which they have. Asterisks represent attributes which should be mandatory.

-Language (Object)
	-*id (string, unique code representing language in database)
	-*language (string, language name)
	-*iso (string, ISO 639-3 code representing the language)
	-*assignment (Object)
		-*value (string, does this language have gender assignment: yes/no)
		-references (List of Reference Objects, reference for number of genders, list of genders, or attribute not specific to individual gender)
		-genders (List of Gender Objects)
		-nominals (List of Nominal Objects)
	-*agreement (Object)
		-*value (string, does this language have gender agreement: yes/no)
		-references (List of Reference Objects, reference for agreement paradigm information not specific to a specific an individual paradigm or convention)
		-paradigms (list of Paradigm Objects)
		-conventions (list of Convention Objects)

-Reference (Object)
	-*source (string, unique code representing paper/source)
	-pages (string, page numbers separated with "," and "--")
	-example (string, example number, including sub/subsub-example, e.g. 5b-ii)
	-subexample (string, a number such that, if there are instances of optionality in an example, this helps to disambiguate)
	-content (Object)
		-nativetext (string, native text first line with {} surrounding each word)
		-*transcription (string, transcription of native text with {} surrounding each word)
		-*gloss (string, gloss of text with {} surrounding each word)
		-*freetranslation (free translation of text)
		-literaltranslation (literal translation of text)
		-explanation (string, explanation)
		-quotation (string, if content is a quote rather than an example)
		-judgement (string, judgement for a given sentence)

-Gender (Object)
	-gloss
	-assignments (List of Assignment Objects)

-Assignment (Object)
	-*assignment (string, kind of assignment: arbitrary, semantic)
	-class (if semantic assignment, the semantic category of assignment (female human, tools, divine entities, etc.))
	-references (List of Reference Objects, reference for this kind of assignment for gender)
	
-Paradigm (Object)
	-*paradigm (string, type of paradigm: attributive adject, finite verb, participle)
	-class (string, if restricted to a specific class of the paradigm (declension, agreement, semantic class), specify) 
	-*value (string, does this paradigm have gender agreement: yes/no)
	-syncretism (List of Syncretism Objects)
	-references (List of Reference Objects)

-Convention (Object)
	-*convention (string, the kind of convention: mixed group plurals, pancake agreement)
	-*paradigm (string, the paradigm attribute of one of the paradigm objects)
	-conditions (list of strings, if there is some conditioning for the convention, such as gender specificity, specify)
	-*result (string, the gloss attribute of one of the gender objects)
	-references (List of Reference Objects)

-Syncretism (Object)
	-class (string, if restricted to a specific class of the paradigm (declension, agreement, semantic class), specify) 
	-*items (List of items within a paradigm)
	-references (List of Reference Objects)

-Nominal (Object)
	-nominaltype (string, type of nominal: personal pronoun, quantifier, question pronoun)
	-nongenderfeatures?
	-???
