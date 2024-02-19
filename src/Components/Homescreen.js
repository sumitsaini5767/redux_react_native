import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "../redux/Constants";
import { addItem, removeItem } from "../redux/Action";

export default function Homescreen() {
  const data = useSelector((state) => state.Reducer);
  console.warn(data);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(data);
  }, [data]);

  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch(addItem(1));
  };
  const decreseCount = () => {
    dispatch(removeItem(1));
  };
  return (
    <View style={styles.container}>
      <Button title="Add" onPress={increaseCount} />
      <Text style={{ marginVertical: 25, fontSize: 25 }}>
        Data Is : {count}
      </Text>
      <Button title="Substract" onPress={decreseCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
