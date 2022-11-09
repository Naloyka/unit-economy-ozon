
// specify the data
const rowData = [
    /*{
        vendorCode: "12547848",
        category: "Кроссовки",
        brand: "Кроссовки",
        name: "Кроссовки мужские Reebok",
        price: 7800,
        acquiring: "-",
        сommission: "",
        priceDeliveryFBS: "-",
        priceDeliveryExpress: "-",
        sellingPriceFBS

    },*/
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "Рассчитать",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },
    {
        'Артикул': "12547848",
        "Категория": "Кроссовки",
        "Наименование": "Кроссовки мужские",
        "Оптовая цена, руб.": "",
        "Расходы на маркетинг, %": "",
        "Расходы на хранение, %": "",
        "Кнопки": "...",
        "Цена": 7800,
        "Экваеринг": "no-data",
        "Комиссия площадки": "no-data",
        "Стоимость доставки FBS": "no-data",
        "Стоимость доставки Express": "no-data",
        "Цена продажи FBS": "no-data",
        "% хранения": "no-data",
        "% маркетинга": "no-data",
        "% маржи": "no-data",
        "Акция Озон": "no-data",
        "Сколько на руки": "no-data",
        "Маржа": "no-data",
        "Цена продажи Express": "no-data",
        "Проверка FBS": "no-data",
        "Проверка Express": "no-data",
        "Real Delivery Cost": "no-data",
        "Цена продажи Express финальная": "no-data"
    },

];

class TotalValueRenderer {
    // gets called once before the renderer is used
    init(params) {
        // create the cell
        this.eGui = document.createElement('div');
        this.eGui.innerHTML = `
            <span>
                <a class="blue" href="${params.data.link}">${params.data.link}<a/>
            </span>
         `;
    }

    getGui() {
        return this.eGui;
    }

    // gets called whenever the cell refreshes
    refresh(params) {
        // set value into cell again
        this.cellValue = this.getValueToDisplay(params);
        this.eValue.innerHTML = this.cellValue;

        // return true to tell the grid we refreshed successfully
        return true;
    }

    // gets called when the cell is removed from the grid
    destroy() {
        // do cleanup, remove event listener from button
        if (this.eButton) {
            // check that the button element exists as destroy() can be called before getGui()
            this.eButton.removeEventListener('click', this.eventListener);
        }
    }

    getValueToDisplay(params) {
        return params.valueFormatted ? params.valueFormatted : params.value;
    }
}

function show(e) {
    alert("Кнопка работает")
}

class Button {
    // gets called once before the renderer is used
    init(params) {
        // create the cell
        this.eGui = document.createElement('div');
        this.eGui.innerHTML = `
            <span>
                <button onClick="show()" class="blue-btn">Рассчитать<button/>
            </span>
         `;


    }

    getGui() {
        return this.eGui;
    }

    // gets called whenever the cell refreshes
    refresh(params) {
        // set value into cell again
        this.cellValue = this.getValueToDisplay(params);
        this.eValue.innerHTML = this.cellValue;

        // return true to tell the grid we refreshed successfully
        return true;
    }

    // gets called when the cell is removed from the grid
    destroy() {
        // do cleanup, remove event listener from button
        if (this.eButton) {
            // check that the button element exists as destroy() can be called before getGui()
            this.eButton.removeEventListener('click', this.eventListener);
        }
    }

    getValueToDisplay(params) {
        return params.valueFormatted ? params.valueFormatted : params.value;
    }
}

class Input {
    // gets called once before the renderer is used
    init(params) {
        // create the cell
        this.eGui = document.createElement('div');
        this.eGui.innerHTML = `
        <input type="number" class="table-field" placeholder="Введите цену">
         `;


    }

    getGui() {
        return this.eGui;
    }

    // gets called whenever the cell refreshes
    refresh(params) {
        // set value into cell again
        this.cellValue = this.getValueToDisplay(params);
        this.eValue.innerHTML = this.cellValue;

        // return true to tell the grid we refreshed successfully
        return true;
    }

    // gets called when the cell is removed from the grid
    destroy() {
        // do cleanup, remove event listener from button
        if (this.eButton) {
            // check that the button element exists as destroy() can be called before getGui()
            this.eButton.removeEventListener('click', this.eventListener);
        }
    }

    getValueToDisplay(params) {
        return params.valueFormatted ? params.valueFormatted : params.value;
    }
}

// Перевод

const localeText = {
    // for filter panel
    page: 'Страница',
    more: 'ещё',
    to: 'к',
    of: 'из',
    next: 'Следующая',
    last: 'Последняя',
    first: 'Первая',
    previous: 'Предыдущая',
    loadingOoo: 'Загрузка...',

    // for set filter
    selectAll: 'Выделить всё',
    searchOoo: 'Поиск...',
    blanks: 'Ничего не найдено',

    // for number filter and text filter
    filterOoo: 'Фильтровать...',
    applyFilter: 'Применить фильтр...',
    equals: 'Равно',
    notEqual: 'Не равно',

    // for number filter
    lessThan: 'Меньше чем',
    greaterThan: 'Больше чем',
    lessThanOrEqual: 'Меньше или равно',
    greaterThanOrEqual: 'Больше или равно',
    inRange: 'В промежутке',

    // for text filter
    contains: 'Содержит',
    notContains: 'Не содержит',
    startsWith: 'Начинается с',
    endsWith: 'Заканчивается',

    // filter conditions
    andCondition: '"И"',
    orCondition: '"ИЛИ"',

    // the header of the default group column
    group: 'Группа',

    // tool panel
    columns: 'Столбцы',
    filters: 'Фильтры',
    rowGroupColumns: 'Столбцы группировки по строкам',
    rowGroupColumnsEmptyMessage: 'Перетащите сюда для группировки по строкам',
    valueColumns: 'Столбцы со значениями',
    pivotMode: 'Режим сводной таблицы',
    groups: 'Группы',
    values: 'Значения',
    pivots: 'Заголовки столбцов',
    valueColumnsEmptyMessage: 'Перетащите сюда для агрегации',
    pivotColumnsEmptyMessage: 'Перетащите сюда, чтобы задать заголовки столбам',
    toolPanelButton: 'Панель инструментов',

    // other
    noRowsToShow: 'Нет данных',

    // enterprise menu
    pinColumn: 'Закрепить колонку',
    valueAggregation: 'Агрегация по значению',
    autosizeThiscolumn: 'Автоматически задавать размер этой колонки',
    autosizeAllColumns: 'Автоматически задавать размер всем колонкам',
    groupBy: 'Группировать по',
    ungroupBy: 'Разгруппировать по',
    resetColumns: 'Сбросить столбцы',
    expandAll: 'Развернуть всё',
    collapseAll: 'Свернуть всё',
    toolPanel: 'Панель инструментов',
    export: 'Экспорт',
    csvExport: 'Экспорт в CSV',
    excelExport: 'Экспорт в Excel (.xlsx)',
    excelXmlExport: 'Экспорт в XML (.xml)',

    // enterprise menu pinning
    pinLeft: 'Закрепить слева <<',
    pinRight: 'Закрепить справа >>',
    noPin: 'Не закреплять <>',

    // enterprise menu aggregation and status bar
    sum: 'Сумма',
    min: 'Минимум',
    max: 'Максимум',
    none: 'Пусто',
    count: 'Количество',
    average: 'Среднее значение',
    filteredRows: 'Отфильтрованные',
    selectedRows: 'Выделенные',
    totalRows: 'Всего строк',
    totalAndFilteredRows: 'Строк',

    // standard menu
    copy: 'Копировать',
    copyWithHeaders: 'Копировать с заголовком',
    ctrlC: 'Ctrl+C',
    paste: 'Вставить',
    ctrlV: 'Ctrl+V'
}

let arrString = []

// let the grid know which columns and what data to use
const gridOptions = {
    columnDefs: [
        {
            field: "Артикул",
            filter: true
        },
        {
            field: "Категория",
        },
        {
            field: "Наименование",
        },
        {
            field: "Оптовая цена, руб.",
            cellRenderer: Input
        },
        {
            field: "Расходы на маркетинг, %",
            cellRenderer: Input
        },
        {
            field: "Расходы на хранение, %",
            cellRenderer: Input
        },
        {
            field: "Кнопки",
            cellRenderer: Button
        },
        {
            field: "Цена",
        },
        {
            field: "Экваеринг",
        },
        {
            field: "Комиссия площадки",
        },
        {
            field: "Стоимость доставки FBS",
        },
        {
            field: "Стоимость доставки Express",
        },
        {
            field: "Цена продажи FBS",
        },
        {
            field: "% хранения",
        },
        {
            field: "% маркетинга",
        },
        {
            field: "% маржи",
        },
        {
            field: "Акция Озон",
        },
        {
            field: "Сколько на руки",
        },
        {
            field: "Маржа",
        },
        {
            field: "Цена продажи Express",
        },
        {
            field: "Проверка FBS",
        },
        {
            field: "Проверка Express",
        },
        {
            field: "Real Delivery Cost",
        },
        {
            field: "Цена продажи Express финальная",
        },

    ],
    defaultColDef: {
        minWidth: 150,
        resizable: true,
        flex: 1,
        sortable: true,
    },
    headerHeight: 70,
    rowData: rowData,
    rowSelection: 'multiple', // можно выделить несколько строк
    showDisabledCheckboxes: true,
    skipHeader: true,
    autoHeaderHeight: true,
    localeText: localeText,
    sortable: true,
    /*
    onCellClicked(data)  {
        console.log(data.data)
    }
    */
    rangeSelectionChanged(data) {
        console.log(data.data)
    },
    onRowSelected(data) {
        if (data.node.selected) {
            console.log(data.data)
        }
    },
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#example_changes');
    new agGrid.Grid(gridDiv, gridOptions);
});