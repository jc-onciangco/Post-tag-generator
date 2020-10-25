const getElem = (selector, isArray) => {
    if(isArray) return document.querySelectorAll(selector)
    return document.querySelector(selector)
}

const createElem = (element) => {
    return document.createElement(element)
}

const input = getElem('.input', false)
const previewTags = getElem('.tags-preview', false)



input.addEventListener('keyup', e => {
    let val = e.target.value.trim()
    let key = e.keyCode
    
    
    if(key === 188) {
        let tagArray = val.split(',')
        console.log(tagArray)

        let newTag = createElem('div')
        let newTagName = createElem('div')
        let removeTag = createElem('div')
        let icon = createElem('i')

        newTag.classList.add('tag')
        newTag.id = Math.random()
        newTagName.classList.add('name')
        removeTag.classList.add('remove')
        icon.classList.add('fas')
        icon.classList.add('fa-times-circle')

        newTagName.textContent = tagArray[tagArray.length-2]
        
        removeTag.appendChild(icon)
        newTag.appendChild(newTagName)
        newTag.appendChild(removeTag)

        previewTags.appendChild(newTag)
        arr()
    }
})

const arr = () => {
    Array.from(previewTags.children).forEach(btn => {
        console.log(btn.id)
        btn.addEventListener('click', e => {
            if(e.target.classList.contains('fa-times-circle')) {
               btn.remove()
            }
        })
    })
}

arr()





// removeBtn.forEach(btn => {
//     btn.addEventListener('click', e => {
//         console.log(e)
//     })
// })