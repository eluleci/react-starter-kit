/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React Starter Kit with Material UI</h1>
          <p>
            This repository is forked from <a href="https://github.com/kriasoft/react-starter-kit">Kriasoft React
            Starter Kit</a>. Some dependencies about graphql, jwt, passport are removed
            and <a href="http://www.material-ui.com/#/components/date-picker">Material UI</a> is added.
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
