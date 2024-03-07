import { Routes, Route } from 'react-router-dom';
import { Blog, Contact, Home, Login, Register, Rental, HomePage, DetailPost, SearchDetail } from './containers/Public';
import { path } from './ultils/constant';
import * as actions from './store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { System, CreatePost } from './containers/System';
function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(actions.getPrices())
    dispatch(actions.getAreas())
    dispatch(actions.getProvinces())
  }, [])
  return (
    <div className="bg-primary ">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path='*' element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental />} />
          <Route path={path.NHA_CHO_THUE} element={<Rental />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<Rental />} />
          <Route path={path.TIN_TUC} element={<Blog />} />
          <Route path={path.LIEN_HE} element={<Contact />} />
          {/* <Route path={'chi-tiet/*'} element={<DetailPost />} /> */}
          <Route path="chi-tiet/:title/:postId" element={<DetailPost />} />
          <Route path={path.SEARCH} element={<SearchDetail />} />
        </Route>

        <Route path={path.SYSTEM} element={<System />}>
          <Route path={path.CREATE_POST} element={<CreatePost />} />

        </Route>





      </Routes>
    </div>
  );
}

export default App;
