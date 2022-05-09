const handleStringDocsToMultipleChoice = (text) => {
    // định dạng : false là sai định dạng
    let isFormat = true
    // 
    let listObjectQuestion = []
    let listQuestion = text.split('<CAU HOI>')
    //Bỏ phần tử đầu
    listQuestion.shift()
    listQuestion.forEach(question => {
        let detaileQuestion = question.split('<$>')
        let rightAnswer = null
        let listAnswers = []
        detaileQuestion.forEach((value, index) => {
            if (index !== 0) {
                if (value.trim()[0] === '_') {
                    rightAnswer = index - 1;
                    listAnswers.push(value.trim().slice(1))
                } else {
                    listAnswers.push(value.trim())
                }
            }
        })
        listObjectQuestion.push({
            nameQuestion: detaileQuestion[0].trim(),
            listAnswers,
            rightAnswer
        })
        if (rightAnswer == null || listAnswers.length !== 4) {
            isFormat = false
        }
    })
    if (isFormat && listObjectQuestion.length !== 0) {
        return listObjectQuestion;
    } else {
        return false
    }
}
export default handleStringDocsToMultipleChoice

