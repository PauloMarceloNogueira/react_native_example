/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Button, ScrollView, Text } from 'react-native';

export default class Todos extends Component {
  state = {
    todos: [],
  }
  createTodo = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((todos) => {
      this.setState({todos});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    this.createTodo();
    return (
      <ScrollView style={style.container}>
        {this.state.todos.map((todo) => {
          console.log(todo, 'Todo')
          return (
            <View style={style.postContainer}>
              <Text style={style.postTitle}>{todo.title}</Text>
              <Text style={style.postDescription}>{todo.body}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
};

const style = {
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    margin: 20,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postDescription: {
    color: '#666',
  },
};

