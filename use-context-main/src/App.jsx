import { FormProvider } from './contexts/FormContext'; 
import FormComponent  from './components/FormComponent';
import  InfoUsuarioComponent  from './components/InfoUsuarioComponent';

const App = () => {

  return (
    <FormProvider>
      <InfoUsuarioComponent/>
      <FormComponent/>
    </FormProvider>
  )
}

export default App
