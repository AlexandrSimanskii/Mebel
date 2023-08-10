import { useContext, Fragment, useState, useEffect } from "react";
import { CustomContext } from "../../utils/Context/Context";
import Card from "../../Component/Card/Card";

const Favorites = () => {
  const { favorites } = useContext(CustomContext);
  const [page, setPage] = useState(1);

  let favoritesPages = new Array(Math.ceil(favorites.length / 4)).fill(null, 0);




  useEffect(() => {
    
    if (page > favoritesPages.length) {
      setPage(favoritesPages.length);
    }
  }, [favorites]);

  useEffect(()=>{
    setPage(1)
  },[])

  if (favorites.length) {
    return (
      <>
        <div  className="cards">
          <div className="container">
            <h2>Избранные товары {page} </h2>
            <div className="cards__wrapper">
              {favorites
                .filter((item, idx) => {
                  return idx >= (page - 1) * 4 && idx < 4 * page;
                })
                .map((item) => {
                  return (
                    <Fragment key={item.id}>
                      <Card item={item} />
                    </Fragment>
                  );
                })}
            </div>
            {<ul>
              { favoritesPages.length>1 && favoritesPages.map((item, idx) => {
                return (
                  <li onClick={() => setPage(idx + 1)} key={idx}>
                    {idx + 1}
                  </li>
                );
              })}
            </ul>}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="container">
        <h2>Список избранных пуст</h2>
      </div>
    );
  }
};

export default Favorites;
