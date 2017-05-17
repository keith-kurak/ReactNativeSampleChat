import React, { Component } from 'react';
import { Text, ListView } from 'react-native';
import {observer} from 'mobx-react';

import TimelineRow from './TimelineRow.js';

/**
 * A list of messages.
 * Uses a ListView, which behaves like a UITableViewController, smartly detecting when rows have and haven't changed, and not
 * rendering all rows at once (unlike a ScrollView).
 */
@observer
export default class Timeline extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    //the DataSource is special in that it needs to be part of the state, even if the data is passed as props.
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