import { GridComponent } from '@syncfusion/ej2-react-grids'
import data from '../../../assets/data/dataSource.json'
import '../../../styles/Grid.module.css';

const Grid: React.FC = () => {
   return (
        <>
          <GridComponent style={{
                top: "2em",
              }} dataSource={data} / >
        </>
   ) 
}

export default Grid
