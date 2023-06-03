type AnswerType = {
    answer: string
    status: boolean
}

type QuestionType = {
    question: string,
    answers: AnswerType[],
    explaination: string 
}

export interface Quiz {
    id: number,
    title: string,
    questions: QuestionType[]
}

export interface CatalogData {
    id: number,
    title: string,
    quantityOfQuestions: number
}