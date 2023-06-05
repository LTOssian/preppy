export type AnswerType = {
    answer: string
    status: boolean
}

export type QuestionType = {
    question: string,
    answers: AnswerType[],
    explaination: string,
    source?: string
}

export interface Quiz {
    id: number,
    title: string,
    questions: QuestionType[],
}

export interface CatalogData {
    id: number,
    title: string,
    quantityOfQuestions: number
}