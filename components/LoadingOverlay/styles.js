export default theme => ({
  dot: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '100%',
    display: 'inline-block',
    height: '60%',
    position: 'absolute',
    top: 0,
    width: '60%',
  },
  hidden: {
    opacity: 0,
    zIndex: -1,
  },
  root: {
    alignItems: 'center',
    backgroundColor: 'rgba(245, 247, 249, 0.5)',
    bottom: 0,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    transition: 'all 0.3s ease',
    width: '100%',
  },
  spinner: {
    height: 40,
    margin: '100px auto',
    position: 'relative',
    textAlign: 'center',
    width: 40,
  },
  visible: {
    opacity: 1,
    zIndex: 1000,
  },
});