export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector)
        
        this.init()
    }
 
    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
    }
    
    get template() {
        return '<h1>template</h1>'
    }
}

export function block(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value" type="text">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles" type="text">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
        </form> 
        </hr />
    `
}