//Export docs
import * as XLSX from 'xlsx';

const handleExport = async (dataListObject, nameFile, title) => {
    let arrExportToExcels = [];
    arrExportToExcels.push([title])
    arrExportToExcels.push(Object.keys(dataListObject[0]))
    dataListObject.map(item => {
        let arr = []
        for (let i = 0; i < Object.keys(dataListObject[0]).length; i++) {
            arr.push(item[Object.keys(dataListObject[0])[i]])
        }
        arrExportToExcels.push(arr)
    })
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.aoa_to_sheet(arrExportToExcels)
    XLSX.utils.book_append_sheet(wb, ws, 'nameFile')
    XLSX.writeFile(wb, `${nameFile}.xlsx`)
}


export default handleExport