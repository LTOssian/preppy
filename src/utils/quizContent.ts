import { CatalogData, Quiz } from "./quizContent.dto"

export class QuizContent {
    quizContent: Quiz[] = [
        {
            "id": 0,
            "title": "Fondamentaux HTML",
            "questions": [
                {
                    "question": "Un tag <label> doit include un indicateur décrivant un attribut de l'input auquel il est lié, quel est cet attribut ?",
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
                    "explaination": "Les labels permettent de décrire les inputs d'un form à travers l'ID. Les ajouter rend votre HTML plus accessible pour les utilisateurs."
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
                    "explaination": "Les ID sont les sélécteurs les plus spécifiques car ils ne peuvent être assigné que sur un élément HTML"
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