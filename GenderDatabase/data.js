database = `[
	{
		"id":"lithuanian",
		"lang":"Lithuanian",
		"iso":"lit",
        "genders":[
            {
                "name":"masculine",
                "gloss":"MASC"
            },
            {
                "name":"feminine",
                "gloss":"FEM"
            }
        ],
        "paradigms":[
            {
                "paradigm":"adjectives",
                "value":"yes",
                "syncretism":[],
                "references":[]
            },
            {
                "paradigm":"finite verbs",
                "value":"no",
                "syncretism":[],
                "references":[]
            },
            {
                "paradigm":"verbal participle",
                "value":"yes",
                "syncretism":[],
                "references":[]
            },
            {
                "paradigm":"determiners/demonstratives",
                "value":"yes",
                "syncretism":[],
                "references":[]
            },
            {
                "paradigm":"numerals",
                "class":"?",
                "value":"yes",
                "syncretism":[],
                "references":[]
            }
        ],
        "conventions":[
            {
                "convention":"mixed-gender plural",
                "paradigm":"",
                "conditions":["",""],
                "result":"",
                "references":[
                    {
                        "source":"AdamsonSereikaite2019",
                        "pages":"6",
                        "example":"16",
                        "content":{
                            "nativetext":"Atletai yra aukšt-ì/*-os/*-a.",
                            "gloss":"athletes.M are tall-M/*-F/*-N",
                            "freetranslation":"Athletes (males and females/males) are tall.",
                            "explanation":"A plural professional noun ('athletes' in this case) triggers masculine agreement when it refers to a mixed group.",
                            "judgement":"OK"
                        }
                    },
                    {
                        "source":"AdamsonSereikaite2019",
                        "pages":"6",
                        "example":"17",
                        "content":{
                            "nativetext":"Atletės yra aukšt-os/*-ì/*-a.",
                            "gloss":"athletes.F are tall-F/*-M/*-N",
                            "freetranslation":"Athletes (females) are tall.",
                            "explanation":"A feminine plural refers exclusively to a group of women.",
                            "judgement":"OK"
                        }
                    }
                ]
            }
        ]
    },
    {
        "id":"greek-modern",
        "lang":"Greek",
        "iso":"ell",
        "genders":[
            {
                "name":"masculine",
                "gloss":"MASC"
            },
            {
                "name":"feminine",
                "gloss":"FEM"
            },
            {
                "name":"neuter",
                "gloss":"NEUT"
            }
        ]
    },
    {
        "id":"mandarin",
        "lang":"Mandarin",
        "iso":"cmn",
        "genders":[]
    }
]
`