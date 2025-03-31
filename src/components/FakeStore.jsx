import { useEffect, useState } from "react";
 
 const FakeStore = () => {
 
     const [produtos, setProdutos] = useState([])
     const [filtrados, setFiltrados] = useState([])
     const [categorias, setCategorias] = useState([])
     const [ordenados, setOrdenados] = useState([])
 
     function filtrarPorCategoria(categoria) {
         setFiltrados(produtos.filter((produto) => produto.category == categoria));
     }
 
     function filtrarPorNome(nome) {
         setFiltrados(produtos.filter((produto) => produto.title.toLowerCase().includes(nome.toLowerCase())));
     }
 
     function ordenarProdutos(tipo){
         
         
         if(tipo == "menorPreco"){
 
             setOrdenados(produtos.toSorted((produtoA, produtoB) => produtoA.price - produtoB.price))
         } else {
             setOrdenados(produtos.toSorted((produtoA, produtoB) => produtoB.rating.rate - produtoA.rating.rate))
         }
         
     }
     
 
     useEffect(() => {
         fetch("https://fakestoreapi.com/products")
             .then((resposta) => resposta.json())
             .then((resposta) => {
                 setProdutos(resposta);
             })
 
         fetch("https://fakestoreapi.com/products/categories")
             .then((resposta) => resposta.json())
             .then((resposta) => {
                 setCategorias(resposta);
             })
     }, []);
 
 
     return (
         <div className="h-screen p-[60px] bg-orange-500 overflow-auto">
             <div className="flex justify-between p-4 bg-white rounded">
                 <input
                     id="busca"
                     type="text"
                     placeholder="Buscar produto"
                     className="h-[40px] border-2 rounded pl-3 focus:outline-orange-500 duration-200"
                     onChange={(event) => filtrarPorNome(event.target.value)}
                 />
                 <div className="flex gap-4">
                     <select
                         id="categorias"
                         className="h-[40px] border-2 px-3 rounded focus:outline-orange-500"
                         onChange={(event) => filtrarPorCategoria(event.target.value)}
                     >
                         <option selected disabled>Filtrar categoria</option>
                         {
                             categorias.length > 0 && (
                                 categorias.map((categoria, index) => (
                                     <option key={`cat-${index}`} value={categoria}>{categoria}</option>
                                 ))
                             )
                         }
                     </select>
                     <select
                         id="filtros"
                         className="h-[40px] border-2 px-3 rounded focus:outline-orange-500"
                         onChange={(event) => ordenarProdutos(event.target.value)}
                     >
                         <option selected disabled>Filtrar por</option>
                         <option value="menorPreco">Menor Preço</option>
                         <option value="maiorAvaliacao">Melhor Avaliado</option>
                     </select>
                 </div>
             </div>
 
             <div className="grid grid-cols-5 gap-3 mt-3">
                 {
                     produtos.length > 0 && (
                         (ordenados.length > 0 ? ordenados : (filtrados.length > 0 ? filtrados : produtos))
                             .map(produto => (
                                 <div key={produto.id} className="p-3 bg-white rounded">
                                     <div className="relative">
                                         <img
                                             src={produto.image}
                                             alt={produto.title}
                                             className="w-full h-[200px] object-contain rounded" />
                                         <h3 className="absolute top-0 right-0 px-2 font-semibold text-white bg-orange-500 rounded">
                                             {produto.rating.rate}
                                         </h3>
                                     </div>
                                     <h2
                                         className="text-[18px] font-semibold line-clamp-1"
                                         title={produto.title}
                                     >
                                         {produto.title}
                                     </h2>
                                     <h3>{produto.category}</h3>
                                     <h3 className="text-right">R$ {produto.price}</h3>
                                     <button className="w-full h-[40px] bg-orange-500 mt-3 font-bold text-white rounded hover:bg-orange-600 duration-200">Comprar</button>
                                 </div>
                             ))
                         ) 
                         
         
                 }
             </div>
         </div>
     );
 }
 
 export default FakeStore;