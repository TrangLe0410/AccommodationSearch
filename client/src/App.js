import { Routes, Route } from 'react-router-dom';
import { Blog, Contact, Home, Login, Register, RentalApartment, RentalHouse, RentalRoom, HomePage } from './containers/Public';
import { path } from './ultils/constant';

function App() {
  return (
    <div className="h-screen w-full">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path='*' element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
          <Route path={path.NHA_CHO_THUE} element={<RentalHouse />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.TIN_TUC} element={<Blog />} />
          <Route path={path.LIEN_HE} element={<Contact />} />
        </Route>



      </Routes>
    </div>
  );
}

export default App;
