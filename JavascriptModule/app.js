// storage controller
const StorageController = (function(){



    return{
        storeProduct: function(product){
            let products;
            if(localStorage.getItem('products')===null){
                products = [];
                products.push(product);
                localStorage.setItem('products',JSON.stringify(products));
            }
            else{
                products = JSON.parse(localStorage.getItem('products'));
                products.push(product);
                
            }
            localStorage.setItem('products',JSON.stringify(products));
        },
        getProducts: function(){
            let products;
            if(localStorage.getItem('products')===null){
                products = [];
            }
            else{
                products = JSON.parse(localStorage.getItem('products'));
            }
            return products;
        },
        updateProduct: function(product){
            let products = JSON.parse(localStorage.getItem('products'));
            products.forEach(function(prd,index){
                if(prd.id == product.id){
                    products.splice(index,1,product);
                }
            });
            localStorage.setItem('products',JSON.stringify(products));

        },
        deleteProduct: function(id){
            let products = JSON.parse(localStorage.getItem('products'));
            products.forEach(function(prd,index){
                if(prd.id == id){
                    products.splice(index,1);
                }
            });
            localStorage.setItem('products',JSON.stringify(products));
        }
    }
})();



//product controller
const ProductController = (function(){
    // private
    const Product = function(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;

    }

    const data = {
        products: StorageController.getProducts(),
        selectedProduct: null,
        totalPrice: 0
    }; 

    return{
        getProducts: function(){
            return data.products;
        },
        getData: function(){
            return data;
        },
        addProduct: function(name,price){
            let id;
            if (data.products.length > 0){
                id = data.products[data.products.length-1].id + 1;
            }
            else{
                id = 0;
            }
            const newProduct = new Product(id,name,price);
            data.products.push(newProduct);
            return newProduct;
        },
        getTotal: function(){
            let total = 0;
            data.products.forEach(function(item){
                total += parseInt(item.price);
                console.log(total);
                data.totalPrice = total;
            });
            
            return data.totalPrice;
        },
        getProductById: function(id){
            let product = null;
            data.products.forEach(function(prd){
                if (prd.id == id){
                    product = prd;
                }
            })

            return product;
        },
        getCurrentProduct: function(){
            return data.selectedProduct;
        },
        setCurrentProduct: function(product){
            data.selectedProduct = product;
        },
        updateProduct: function(name, price){
            let product = null;

            data.products.forEach(function(prd){
                if(prd.id == data.selectedProduct.id){
                    prd.name = name;
                    prd.price = price;
                    product = prd;
                }
            });

            return product;
        },
        deleteProduct: function(product){

            data.products.forEach(function(prd,index){
                if(prd.id == product.id){
                    data.products.splice(index,1);
                }
            });

        }
    }


})();


// UI Controller 

const UIController = (function(){
    
    const Selectors = {
        productList: '#item-list',
        addButton: '.btn',
        productName: '#productName',
        productPrice: '#productPrice',
        productCard: '#productCard',
        totalTl: '#total-tl',
        totalDolar: '#total-dolar',
        updateBtn: '.updateBtn',
        deleteBtn: '.deleteBtn',
        cancelBtn: '.cancelBtn',
        productListItems: '#item-list tr',
    }

    return{
        createProductList: function(products){
            let html = '';
            
            products.forEach(prd =>{
                html += `
                    <tr>
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price}</td>
                        <td class="text-right">
                            
                                <i class="fas fa-edit edit-product"></i>
                            
                            
                        </td>
                    </tr>
                
                `
            });
                
            

            document.querySelector(Selectors.productList).innerHTML = html;
        },
        getSelectors: function(){
            return Selectors;
        },
        addProduct: function(prd){
            document.querySelector(Selectors.productCard).style.display = 'block';
            var item = `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}</td>
                    <td class="text-right">
                        <i class="fas fa-edit edit-product"></i>
                    </td>
                </tr>
            `
            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearInputs: function(){
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        hideCard: function(){
            document.querySelector(Selectors.productCard).style.display = 'none';
        },
        showTotal: function(total){
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTl).textContent = total*4.5;
        },
        addProductToForm: function(){
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },
        clearWarnings: function(){
            const items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function(item){
                if(item.classList.contains('bg-warning')){
                    item.classList.remove('bg-warning');
                }
            });
        },
        addingState: function(){
            //if(item){
            //    item.classList.remove('bg-warning');
            //}
            UIController.clearWarnings()
            UIController.clearInputs();
            document.querySelector(Selectors.addButton).style.display='inline';
            document.querySelector(Selectors.updateBtn).style.display='none';
            document.querySelector(Selectors.deleteBtn).style.display='none';
            document.querySelector(Selectors.cancelBtn).style.display='none';
        },
        editState: function(tr){
            
            const parent = tr.parentNode;

            for(let i=0; i<parent.children.length;i++){
                parent.children[i].classList.remove('bg-warning');
            }

            tr.classList.add('bg-warning');
            document.querySelector(Selectors.addButton).style.display='none';
            document.querySelector(Selectors.updateBtn).style.display='inline';
            document.querySelector(Selectors.deleteBtn).style.display='inline';
            document.querySelector(Selectors.cancelBtn).style.display='inline';
        },
        updateProduct: function(updatedProduct){
            let updatedItem = null;
            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(function(item){
                if(item.classList.contains('bg-warning')){
                    item.children[1].textContent = updatedProduct.name;
                    item.children[2].textContent = updatedProduct.price + ' $';
                    updatedItem = item;
                }
            });

            return updatedItem;



        },
        deleteProduct: function(product){
            let items = document.querySelectorAll(Selectors.productListItems);
            items.forEach(function(item){
                if(item.classList.contains('bg-warning')){
                    item.remove();
                }
            });

        }
    }


})(); 


//App controller
const AppController = (function(ProcudtCtrl,UICrtl,StorageCrtl){

    const UISelectors = UICrtl.getSelectors();

    // load event listener

    const loadEventListeners = function(){
        // add product event

        document.querySelector(UISelectors.addButton).addEventListener('click',productAddSubmit);

        // edit product
        document.querySelector(UISelectors.productList).addEventListener('click',productEditClick);

        // edit product submit
        document.querySelector(UISelectors.updateBtn).addEventListener('click',productEditSubmit);

        // cancel butgton click
        document.querySelector(UISelectors.cancelBtn).addEventListener('click',cancelUpdate);

        // delete button click
        document.querySelector(UISelectors.deleteBtn).addEventListener('click',deleteProductSubmit);

    }

    const deleteProductSubmit = function(e){

        //console.log('delete event');
        // get selected product
        const selectedProduct = ProcudtCtrl.getCurrentProduct();

        // delete product
        ProcudtCtrl.deleteProduct(selectedProduct);

        // delete ui
        UICrtl.deleteProduct(selectedProduct);

        const total = ProcudtCtrl.getTotal();
        
        
        // show total
        UICrtl.showTotal(total);
        // delete from LS
        StorageCrtl.deleteProduct(selectedProduct.id);

        UICrtl.addingState();

        if(total ==0){
            UICrtl.hideCard();
        }

        e.preventDefault();
    }
    const cancelUpdate = function(e){

        //console.log('cancel clicked');
        UICrtl.addingState();
        UICrtl.clearWarnings();
        e.preventDefault();
    }

    const productEditSubmit = function(e){
        //console.log('edit submit calisti');
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !=='' && productPrice !==''){
            // update product
            const updatedProduct = ProcudtCtrl.updateProduct(productName,productPrice);
            // update ui
            let item = UICrtl.updateProduct(updatedProduct);
            
            const total = ProcudtCtrl.getTotal();
            
            // show total
            UICrtl.showTotal(total);

            StorageCrtl.updateProduct(updatedProduct);

            UICrtl.addingState();
        }


        e.preventDefault();
    }

    const productEditClick = function(e){

        
        if(e.target.classList.contains('edit-product')){
            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            console.log(id);
            //get selected product
            const product = ProcudtCtrl.getProductById(id);
            
            // set current product
            ProcudtCtrl.setCurrentProduct(product);
            
            UICrtl.clearWarnings();

            // add product ui
            UICrtl.addProductToForm();
            
            UICrtl.editState(e.target.parentNode.parentNode);
        }
        e.preventDefault();
    }

    const productAddSubmit = function(e){
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;
        if (productName !== '' && productPrice !==''){
            // Add product
            const newProduct = ProcudtCtrl.addProduct(productName,productPrice);
            // console.log(newProduct);
            UICrtl.addProduct(newProduct);

            // add product to LS
            StorageCrtl.storeProduct(newProduct);
            // get total
            const total = ProcudtCtrl.getTotal();
            
            // show total
            UICrtl.showTotal(total);

            //
            UICrtl.clearInputs();


        }
        e.preventDefault();
    }

    return{
        init: function(){
            console.log('Starting app.');
            UIController.addingState();
            const products = ProcudtCtrl.getProducts();
            if (products.length == 0){
                UICrtl.hideCard();
            }
            else{
                UIController.createProductList(products);
                //load event listener
                
            }
            loadEventListeners();
        }
    }


})(ProductController,UIController,StorageController); 

AppController.init();
