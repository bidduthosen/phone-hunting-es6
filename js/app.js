
const loadAllPhone = async (status, searchText) => {
    document.getElementById('loader').classList.add('hidden');


    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText ? searchText : 'iphone'}`);
    const data = await res.json()
    if (!!status) {
        displayAllPhoen(data.data);
    }
    else {
        displayAllPhoen(data.data.slice(0, 6));
    }
}

const handleSearch = () => {
    document.getElementById('loader').classList.remove('hidden');
    const inputNameField = document.getElementById('input-brand-name').value;
    setTimeout(() => {
        loadAllPhone(false, inputNameField)

    }, 4000)

}


const displayAllPhoen = (items) => {
    const allPhoneContainer = document.getElementById('allPhone-container');
    items.map(item => {
        const { slug, phone_name, image, brand } = item
        const div = document.createElement('div');
        div.innerHTML =
            `
            <div class="card shadow-xl">
                <figure class="px-10 pt-10">
                    <img
                    src="${image}"
                    alt="Shoes"
                    class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">${brand}</h2>
                    <p>${phone_name}</p>
                    <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        allPhoneContainer.appendChild(div);
    })

}

const handleShowAll = () => {
    loadAllPhone(true)
}

loadAllPhone(false, 'iphone')