import { Route, Routes } from 'react-router-dom';
import {   useEffect, useState } from 'react';
import Horario from './views/Horario';
import Profesores from './views/Profesores';
import CrearProfesor from './views/CrearProfesor';
import Profesor from './views/Profesor';
import Login from './views/Login';
import Error from './views/Error';
import { AuthProvider } from './context/AuthContext';

import { Triangle } from 'react-loader-spinner';
import ProtectedRoute from './context/ProtectedRoute';
import Salones from './views/Salones';
import Clases from './views/Clases';










/*
function PrivateRoutes({ children }: PrivateRouteProps) {
    const { status,userId } = useContext(AuthContext);
    if (status === 'checking') return <div className='flex flex-col items-center justify-center h-screen'><Triangle /> <p>Revisando credenciales...</p> </div>
    return(
      (status=== 'authenticated' && userId )? <>{children}</> : <Navigate to="/login" />
    )
}
function Intro({ children }: PrivateRouteProps) {
    const { status,userId } = useContext(AuthContext);

    return(
      (status=== 'authenticated' && userId )?  <Navigate to="/" /> : <>{children}</>
    )
}
*/



function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(false); // Cambia a false una vez que los datos estén listos
        };

        loadData();
    }, []);

    if (loading) {
        return <div className='flex flex-col items-center justify-center h-screen'><Triangle /> <p>Revisando credenciales...</p> </div>

    }

  return (
    <AuthProvider>
        <Routes>
          <Route path="/clases" element={ <ProtectedRoute><Clases /></ProtectedRoute>} />
          <Route path="/salones" element={ <ProtectedRoute><Salones /></ProtectedRoute>} />
          <Route path="/horario" element={ <ProtectedRoute><Horario /></ProtectedRoute>} />
          <Route path="/" element={ <ProtectedRoute><Profesores /></ProtectedRoute>} />
          <Route path="/profesor/:id" element={<ProtectedRoute><Profesor /></ProtectedRoute>} />
          <Route path="/profesor/crear" element={<ProtectedRoute><CrearProfesor /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ProtectedRoute><Error /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
  );
}

export default App;
