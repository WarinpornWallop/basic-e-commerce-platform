import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export interface DrawerMenuItem {
  label: string;
  icon?: React.ReactNode;
}

export interface TemporaryDrawerProps {
  buttonLabel?: string;
  menuGroups: DrawerMenuItem[][];
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({
  buttonLabel = "Open drawer",
  menuGroups,
}) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {menuGroups.map((group, groupIdx) => (
        <div key={groupIdx}>
          <List>
            {group.map((item, idx) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon ?? (idx % 2 === 0 ? <InboxIcon /> : <MailIcon />)}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {groupIdx < menuGroups.length - 1 && <Divider />}
        </div>
      ))}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>{buttonLabel}</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;