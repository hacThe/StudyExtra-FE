const handleStringDocsToMultipleChoice = (text) => {
    //Đánh dấu ví trí của từng câu
    let pageIndex = []
    //
    let listQuestionString = []
    // Tối đa 100 câu
    for (let i = 0; i < 100; i++) {
        let index = text.search(`${i + 1}. `);
        if (index !== -1) {
            pageIndex.push(index)
        }
    }

    if (pageIndex.length == 0) {
        return false
    }

    for (let i = 0; i < pageIndex.length; i++) {
        let questionString
        if (i === pageIndex.length - 1) {
            questionString = text.slice(pageIndex[i], text.length)
        } else {
            questionString = text.slice(pageIndex[i], pageIndex[i + 1])
        }
        listQuestionString.push(questionString.trim());
    }

    return ConvertQuestionToObject(listQuestionString)
}


const ConvertQuestionToObject = (questions) => {
    let listObjectQuestion = []
    questions.forEach((question, key) => {
        let nameQuestion
        let ansA
        let ansB
        let ansC
        let ansD
        let result // 0: A, 1: B, 2: C, 3: D   => Đáp án

        let newQuestion = question
        console.log(newQuestion)
        newQuestion = newQuestion.replace('a. ', 'A. ')
        newQuestion = newQuestion.replace('b. ', 'B. ')
        newQuestion = newQuestion.replace('c. ', 'C. ')
        newQuestion = newQuestion.replace('d. ', 'D. ')
        newQuestion = newQuestion.replace('answer: ', 'Answer: ')
        console.log(newQuestion)


        nameQuestion = newQuestion.slice(0, newQuestion.search('A. '))

        ansA = newQuestion.slice(newQuestion.search('A. '), newQuestion.search('B. '))
        ansB = newQuestion.slice(newQuestion.search('B. '), newQuestion.search('C. '))
        ansC = newQuestion.slice(newQuestion.search('C. '), newQuestion.search('D. '))
        ansD = newQuestion.slice(newQuestion.search('D. '), newQuestion.search('Answer: '))

        switch (newQuestion[newQuestion.length - 1]) {
            case 'A':
                result = 0;
                break
            case 'B':
                result = 1;
                break
            case 'C':
                result = 2;
                break
            case 'D':
                result = 3;
                break
            case 'a':
                result = 0;
                break
            case 'b':
                result = 1;
                break
            case 'c':
                result = 2;
                break
            case 'd':
                result = 3;
                break
            default:
                console.log('Lỗi')
                break;
        }

        if (!ansA || !ansB || !ansC || !ansD) {
            return false
        }

        listObjectQuestion.push({
            nameQuestion,
            answers: [ansA.trim(), ansB.trim(), ansC.trim(), ansD.trim()],
            result
        })
    })

    return listObjectQuestion
}

export default handleStringDocsToMultipleChoice

