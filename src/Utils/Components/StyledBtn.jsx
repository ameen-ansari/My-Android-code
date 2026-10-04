import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

export default function StyledBtn
  () {
  return(
    <>
          <Button onClick={()=>null}>Bottom</Button>
    <Drawer
      anchor={"bottom"}
      open={true}
      onClose={()=>null}
    >
      Bottom
    </Drawer>
    <Button variant="contained">Hello world</Button>;
    </>
    
  )
}