const newImage = (name, pic, localLeft, localBottom)=>{

        
    name = document.createElement('img')
    name.src = pic
    name.style.position = 'fixed'
    name.style.left = localLeft
    name.style.bottom = localBottom
    document.body.append(name)



}

newImage("greenCharacter", "assets/green-Character.gif", "100px", "100px")
newImage("pineTree", "assets/pine-tree.png", "450px", "200px")
newImage("tree", "assets/tree.png", "200px", "300px")
newImage("pillar", "./assets/pillar.png", "350px", "100px")
newImage("crate", "./assets/crate.png", "150px", "200px")
newImage("well", "./assets/well.png", "500px", "425px")


const newItem = (nameItem, picItem, localLeftItem, localBottomItem)=>{

    nameItem = document.createElement('img')
    nameItem.src = picItem
    nameItem.style.position = 'fixed'
    nameItem.style.left = localLeftItem
    nameItem.style.bottom = localBottomItem
    document.body.append(nameItem)

    nameItem.addEventListener('dblclick', function(){
        nameItem.remove()
    })

}

newItem("sword", "./assets/sword.png", "500px", "405px")
newItem("shield", "./assets/sheild.png", "165px", "185px")
newItem("staff", "./assets/staff.png", "600px", "100px")






