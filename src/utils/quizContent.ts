import { CatalogData, Quiz } from "./quizContent.dto"

export class QuizContent {
    quizContent: Quiz[] = [
        {
            "id": 0,
            "title": "Fondamentaux HTML",
            "questions": [
                {
                    "question": "Un tag <label> doit porter un attribut 'for=' décrivant un attribut de l'input auquel il est lié, quel est cet attribut ?",
                    "answers": [
                        {
                            "answer": "Cet attribut est l'ID",
                            "status": true
                        },
                        {
                            "answer": "Cet attribut est la classe",
                            "status": false
                        },
                        {
                            "answer": "Cet attribut est le type",
                            "status": false
                        },
                        {
                            "answer": "Cet attribut est le name",
                            "status": false
                        }
                    ],
                    "explanation": "Les labels permettent de décrire les inputs d'un form à travers l'ID. Les ajouter rend votre HTML plus accessible pour les utilisateurs.",
                    "source": "https://developer.mozilla.org/fr/docs/Web/HTML/Element/label"
                },
                {
                    "question": "Quel élément utiliseriez vous à l'intérieur d'un <form> afin de grouper des inputs et les labels ?",
                    "answers": [
                        {
                            "answer": "L'élement <fieldset>",
                            "status": true
                        },
                        {
                            "answer": "L'élement <field>",
                            "status": false
                        },
                        {
                            "answer": "L'élement <section>",
                            "status": false
                        },
                        {
                            "answer": "Un second élement <form>",
                            "status": false
                        }
                    ],
                    "explanation": "Afin de grouper des 'form controls' il faut utiliser l'ément <fieldset>.",
                    "source": "https://developer.mozilla.org/fr/docs/Web/HTML/Element/fieldset"
                },
                {
                    "question": "Lequel de ces tags indique au navigateur de s'attendre à un document HTML ?",
                    "answers": [
                        {
                            "answer": "<body>",
                            "status": false
                        },
                        {
                            "answer": "<!DOCTYPE html>",
                            "status": true
                        },
                        {
                            "answer": "<html>",
                            "status": false
                        },
                        {
                            "answer": "<main>",
                            "status": false
                        }
                    ],
                    "explanation": "Déclarer le doctype indique au navigateur que le fichier est un document HTML.",
                    "source": "https://developer.mozilla.org/en-US/docs/Glossary/Doctype"
                },
                {
                    "question": "Laquelle de ces syntaxe permet de commenter du HTML ?",
                    "answers": [
                        {
                            "answer": "<-- Je suis un commentaire -->",
                            "status": true
                        },
                        {
                            "answer": "<!-- Je suis la représentation d'un commentaire -->",
                            "status": true
                        },
                        {
                            "answer": "// To comment or not to comment",
                            "status": false
                        },
                        {
                            "answer": "# Commentaire ici",
                            "status": false
                        }
                    ],
                    "explanation": "Bien vu !",
                    "source": "https://developer.mozilla.org/en-US/docs/Web/API/Comment"
                },
                {
                    "question": "Lequel de ces éléments contient les metadata de la page ?",
                    "answers": [
                        {
                            "answer": "<head>",
                            "status": true
                        },
                        {
                            "answer": "<about>",
                            "status": false
                        },
                        {
                            "answer": "<html>",
                            "status": false
                        },
                        {
                            "answer": "<legend>",
                            "status": false
                        }
                    ],
                    "explanation": "Le tag <head> contient toutes les metadata de la page HTML.",
                    "source": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"
                },
                {
                    "question": "Comment un tag <a> peut-il créer un lien ouvrant une nouvelle fenêtre ?",
                    "answers": [
                        {
                            "answer": "En entourant le tag <a> avec un tag <window> ",
                            "status": false
                        },
                        {
                            "answer": "En ajoutant un attribut target avec une valeur '_blank'",
                            "status": true
                        },
                        {
                            "answer": "En utilisant des guillements simples au lieu de double guillemets",
                            "status": false
                        },
                        {
                            "answer": "En ajoutant au tag l'attribut new_window",
                            "status": false
                        }
                    ],
                    "explanation": "L'attribut target avec la valeur '_blank' va ouvrir une nouvelle page quand le lien est cliqué."
                },
                {
                    "question": "Quel est le standard HTML actuel ?",
                    "answers": [
                        {
                            "answer": "HTML1",
                            "status": false
                        },
                        {
                            "answer": "XHTML",
                            "status": false
                        },
                        {
                            "answer": "HTML5",
                            "status": true
                        },
                        {
                            "answer": "CSS",
                            "status": false
                        }
                    ],
                    "explanation": "Bien vu !"
                },
                {
                    "question": "Laquelle de ces syntaxes permet de créer un lien vers le fichier accueil.html ?",
                    "answers": [
                        {
                            "answer": "<a href='./accueil.html' />",
                            "status": false
                        },
                        {
                            "answer": "<a href='./accueil.html'>Accueil</a>",
                            "status": true
                        },
                        {
                            "answer": "<a href='https://www.accueil.com' />",
                            "status": false
                        },
                        {
                            "answer": "<a href='https://www.accueil.com'>Acceuil</a>",
                            "status": false
                        }
                    ],
                    "explanation": "Bien vu, il s'agit de la bonne syntaxe.",
                    "source": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled"
                },
                {
                    "question": "Quel attribut permet d'empêcher un élément du form d'envoyer ses valeurs au serveur ?",
                    "answers": [
                        {
                            "answer": "action='none'",
                            "status": false
                        },
                        {
                            "answer": "disabled",
                            "status": true
                        },
                        {
                            "answer": "hidden",
                            "status": false
                        },
                        {
                            "answer": "type='disable'",
                            "status": false
                        }
                    ],
                    "explanation": "L'attribut booléen 'disabled' rend l'élément non-focusable, non-mutable et ne peut être soumis au serveur.",
                    "source": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled"
                },
                {
                    "question": "ù apparait le contenu de l'élément <title> ?",
                    "answers": [
                        {
                            "answer": "L'onglet du navigateur",
                            "status": true
                        },
                        {
                            "answer": "La première ligne de la page",
                            "status": false
                        },
                        {
                            "answer": "La dernière ligne de la page",
                            "status": false
                        },
                        {
                            "answer": "Il n'apparait nul part et ne sert qu'au SEO",
                            "status": false
                        }
                    ],
                    "explanation": "Et oui ! L'élément <title> définit le titre du document qui est affiché dans la barre de titre du navigateur ou dans l'onglet de la page.",
                    "source": "https://developer.mozilla.org/fr/docs/Web/HTML/Element/title"
                },
                {
                    "question": "A quoi sert l'indentation ?",
                    "answers": [
                        {
                            "answer": "A rendre le code plus lisible pour les autres développeurs",
                            "status": true
                        },
                        {
                            "answer": "A assurer que le navigateur interprète correctement le fichier",
                            "status": false
                        },
                        {
                            "answer": "A changer l'affichage des éléments sur le navigateur",
                            "status": false
                        },
                        {
                            "answer": " A commenter du code inutile",
                            "status": false
                        }
                    ],
                    "explanation": "Bien vu !"
                }                
            ]
        },
        {
            "id": 1,
            "title": "Fondamentaux CSS",
            "questions": [
                {
                    "question": "Laquelle de ces affirmations est vraie",
                    "answers": [
                        {
                            "answer": "Les tags sont plus spécifiques que les IDs et les classes",
                            "status": false
                        },
                        {
                            "answer": "Les classes sont plus spécifiques que les IDs et les tags",
                            "status": false
                        },
                        {
                            "answer": "Les IDs sont plus spécifiques que les classes et les tags",
                            "status": true
                        },
                        {
                            "answer": "Un sélécteur de 3 classes est plus spécifiques qu'un ID",
                            "status": false
                        }
                    ],
                    "explanation": "Les ID sont les sélécteurs les plus spécifiques car ils ne peuvent être assigné que sur un élément HTML"
                },
                {
                    "question": "Quelle syntaxe permet de cibler un élément se trouvant dans un autre élément ?",
                    "answers": [
                        {
                            "answer": ".main-list_li { }",
                            "status": false
                        },
                        {
                            "answer": ".main-list, li { }",
                            "status": false
                        },
                        {
                            "answer": "li.main-list { }",
                            "status": false
                        },
                        {
                            "answer": ".main-list li { }",
                            "status": true
                        }
                    ],
                    "explanation": "Un espace entre deux sélecteurs permet de cibler le second (li) se trouvant dans le premier (.main-list)."
                }
    
            ]
        },
        {
            "id": 2,
            "title": "Fondamentaux JS",
            "questions": [
                {
                    "question": "Laquelle de ces affirmations est vraie",
                    "answers": [
                        {
                            "answer": "Les tags sont plus spécifiques que les IDs et les classes",
                            "status": false
                        },
                        {
                            "answer": "Les classes sont plus spécifiques que les IDs et les tags",
                            "status": false
                        },
                        {
                            "answer": "Les IDs sont plus spécifiques que les classes et les tags",
                            "status": true
                        },
                        {
                            "answer": "Un sélécteur de 3 classes est plus spécifiques qu'un ID",
                            "status": false
                        }
                    ],
                    "explanation": "Les ID sont les sélécteurs les plus spécifiques car ils ne peuvent être assigné que sur un élément HTML"
                }
            ]
        },
        {
            "id": 3,
            "title": "Fondamentaux Python",
            "questions": [
                {
                    "question": "Laquelle de ces affirmations est vraie",
                    "answers": [
                        {
                            "answer": "Les tags sont plus spécifiques que les IDs et les classes",
                            "status": false
                        },
                        {
                            "answer": "Les classes sont plus spécifiques que les IDs et les tags",
                            "status": false
                        },
                        {
                            "answer": "Les IDs sont plus spécifiques que les classes et les tags",
                            "status": true
                        },
                        {
                            "answer": "Un sélécteur de 3 classes est plus spécifiques qu'un ID",
                            "status": false
                        }
                    ],
                    "explanation": "Les ID sont les sélécteurs les plus spécifiques car ils ne peuvent être assigné que sur un élément HTML"
                },
                {
                    "question": "Quelle syntaxe permet de cibler un élément se trouvant dans un autre élément ?",
                    "answers": [
                        {
                            "answer": ".main-list_li { }",
                            "status": false
                        },
                        {
                            "answer": ".main-list, li { }",
                            "status": false
                        },
                        {
                            "answer": "li.main-list { }",
                            "status": false
                        },
                        {
                            "answer": ".main-list li { }",
                            "status": true
                        }
                    ],
                    "explanation": "Un espace entre deux sélecteurs permet de cibler le second (li) se trouvant dans le premier (.main-list)."
                }
    
            ]
        }
    
    ]

    getCatalogData(): CatalogData[] {
        const catalogData = this.quizContent.map(quiz => (
            {
                title: quiz.title,
                id: quiz.id,
                quantityOfQuestions: quiz.questions.length
            }
        ))

        return catalogData;

    }
}