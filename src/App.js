import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route, NavLink, useLocation, Link } from "react-router-dom";
import Home from "./page/Home"
import About from "./page/About"
import { SpeedDialIcon, SpeedDial, SpeedDialAction,  } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import SaveIcon from '@mui/icons-material/Save'

function App() {
  const location = useLocation();
  const actions = [
    { icon: <Link to="/"><FileCopyIcon /></Link>, name: 'Copy' },
    { icon: <Link to="/about"><SaveIcon /></Link>, name: 'Save' },
  ];

  return (
    <div className="container-fluid bg-light" >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'fixed', top: 16, left: 16, }}
          direction={'right'}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>

        <main
          className="col-6 col-sm-8 col-md-10 py-5"
          style={{ overflowX: "hidden", position: "relative" }}
        >
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/about" component={About} />
              <Route path="/settings" component={Settings} />
              <Route path="/" component={Home} />
            </Switch>
          </AnimatePresence>
        </main>
    </div>
  );
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const pageStyle = {
};

// function About() {
//   return (
//     <motion.div
//       style={pageStyle}
//       initial="initial"
//       animate="in"
//       exit="out"
//       variants={pageVariants}
//       transition={pageTransition}
//     >
//       <h1>About</h1>
//       <p>
//         Let's animate transitions between React Router routes with Framer Motion
//       </p>
//       <h2>Framer Motion</h2>
//       <p>
//         Framer Motion is a great library for animations in React easily and
//         quickly.
//       </p>
//       <h2>React Router</h2>
//       <p>One of the most well known routers in the React ecosystem.</p>
//     </motion.div>
//   );
// }

function Settings() {
  return (
    <motion.div
      style={pageStyle}
      className="row"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="col-md-8">
        <h1>Settings</h1>
        <form>
          <fieldset>
            <legend>Details</legend>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Preferences</legend>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="large-labels"
                className="custom-control-input"
              />
              <label htmlFor="large-labels" className="custom-control-label">
                Use Larger Labels
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="email-opt-in"
                className="custom-control-input"
              />
              <label htmlFor="email-opt-in" className="custom-control-label">
                Receive Notifications by Email
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                id="hide-profile-pic"
                className="custom-control-input"
              />
              <label
                htmlFor="hide-profile-pic"
                className="custom-control-label"
              >
                Show Profile Image
              </label>
            </div>
          </fieldset>
        </form>
      </div>
    </motion.div>
  );
}

export default App;