class DragAndDropPage {

get draggable () {return $ ('.draggable')};
get droppable() {return $ ('.droppable')};


async dragAndDrop () {
    await this.draggable.dragAndDrop(this.droppable)
}

}

export default new DragAndDropPage ()