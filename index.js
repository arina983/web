
function getCharacterCard(character) {
    return `
        <div class="card mb-3 col-sm-12 col-md-6 col-lg-4">
            <div class="row g-0">
                <div class="col-4">
                    <img src="${character.thumbnail}"
                         style="max-width: 100%; height: 100%; object-fit: cover;"
                         alt="${character.name}"
                    >
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <button type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal-${character.id}"
                                class="btn btn-secondary btn-sm"
                        >Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getCharacterModal(character) {
    return `
        <div id="exampleModal-${character.id}"
             tabindex="-1"
             aria-labelledby="exampleModalLabel-${character.id}"
             class="modal fade"
             aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${character.name}</h5>
                        <button type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                class="btn-close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <img src="${character.thumbnail}"
                             style="max-width: 100%; height: 300px; object-fit: cover;"
                             alt="${character.name}"
                             class="mb-3"
                        >
                        <div>
                            <p class="text-muted">${character.modified ? new Date(character.modified).toLocaleDateString() : 'Дата не указана'}</p>
                            <h5>Описание:</h5>
                            <p>${character.description || 'Описание отсутствует'}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button"
                                data-bs-dismiss="modal"
                                class="btn btn-secondary btn-sm"
                        >Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
function fetchCharacters() {
    return fetch('https://jsfree-les-3-api.onrender.com/characters')
        .then(response => response.json());
}
function getCharacterCards(characters) {
    return characters.map(character => getCharacterCard(character));
}

function getCharacterModals(characters) {
    return characters.map(character => getCharacterModal(character));
}