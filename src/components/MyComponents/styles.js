import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '50px',
    color: theme.palette.secondary.main,

    '& > p': {
      color: 'yellow',
    },
  },
}));

export default useStyles;
