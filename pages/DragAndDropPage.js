class DragAndDropPage {

get draggable () {return $ ('#column-a')};
get droppable() {return $ ('#column-b')};


async dragAndDrop () {
    await this.draggable.dragAndDrop(this.droppable)
}

}

export default new DragAndDropPage ()