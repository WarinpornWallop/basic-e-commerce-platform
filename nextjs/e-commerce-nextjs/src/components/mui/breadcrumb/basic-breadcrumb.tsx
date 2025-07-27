import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  onItemClick?: (item: BreadcrumbItem, event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function CustomBreadcrumb({
  items,
  separator = <NavigateNextIcon fontSize="small" />,
  onItemClick,
}: CustomBreadcrumbProps) {
    
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator={separator} aria-label="breadcrumb">
        {items.map((item, idx) =>
          item.active ? (
            <Typography key={idx} sx={{ color: 'text.primary' }}>
              {item.label}
            </Typography>
          ) : (
            <Link
              underline="hover"
              key={idx}
              color="inherit"
              href={item.href}
              onClick={e => {
                if (onItemClick) {
                  e.preventDefault();
                  onItemClick(item, e);
                }
              }}
            >
              {item.label}
            </Link>
          )
        )}
      </Breadcrumbs>
    </Stack>
  );
}