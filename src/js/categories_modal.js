const showCategoriesModal = () => {
    const modal = document.getElementById("categories_modal")
    const modalContent = document.getElementById("categories_modal_content")
    const showButton = document.getElementById("show_button_categories_modal")
    const hideButton = document.getElementById("close_modal_categories")
    const body = document.body

    const hide = () => {
        modalContent?.setAttribute('style', 'opacity:0;transform:translateX(200)')
        body?.classList.remove("overflow-hidden")
        setTimeout(() => {
            modal?.setAttribute('style', 'display:none;opacity:0')
        }, 200);
    }

    const show = () => {
        modal?.setAttribute('style', 'display:flex;')
        body?.classList.add("overflow-hidden")
        setTimeout(() => {
            modal?.setAttribute('style', 'opacity:1;display:flex;')
            modalContent?.setAttribute('style', 'opacity:1;transform:translateX(0)')
        }, 200);

        hideButton?.addEventListener('click', hide)
        document.addEventListener('keyup', (e) => {
            if(e.key === 'Escape') return hide()
        })
    }

    showButton?.addEventListener('click', show)
    document.addEventListener('keyup', (e) => {
        if(e.key === 'k' && e.altKey) return show()
    })
}

export default showCategoriesModal