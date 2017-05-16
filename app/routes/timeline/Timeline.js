import React, { Component } from 'react';
import { Text, ListView } from 'react-native';
import {observer} from 'mobx-react';

import TimelineRow from './TimelineRow.js';

@observer
export default class Timeline extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds
    };
  }

  render() {
    const dataSource = this.state.dataSource.cloneWithRows(this.props.store.messages);

    return (
      <ListView
          dataSource={dataSource}
          renderRow={(rowData) => <TimelineRow 
                                    text={rowData.text} 
                                    date={rowData.date} 
                                    onSelect={() => this.props.navigation.navigate('Detail', {id: rowData.id})}/>}
        />
    );
  }
}