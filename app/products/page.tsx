import { SearchComponent } from "../../public/components/search.component"
import { DropdownButton } from "../../public/components/toogleOptions.component"
import Products from "../fetch/get.fetch";


export default async function ProductsPage () {
    const options = ['Opción 1', 'Opción 2', 'Opción 3']
    
    return (
        <div className='container-customer'>
            <h2>Customer</h2>
            <SearchComponent title='Search product in Ddbase' />
            <div>
                <DropdownButton title="Category" list={options} />
                <DropdownButton title="Price" list={options} />
                <DropdownButton title="Provider" list={options} />
            </div>
            <Products />
        </div>
    )
}