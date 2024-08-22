import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";



const products=[
  {
    id:1,
    title:'Product 1',
    description: 'This is My first Product ',
    image : require('./assets/img1.jpeg')
  },
  {
    id:2,
    title:'Product 2',
    description: 'This is My first Product ',
    image : require('./assets/img2.jpeg')
  },
  {
    id:3,
    title:'Product 3',
    description: 'This is My first Product ',
    image : require('./assets/img1.jpeg')
  },
  {
    id:4,
    title:'Product 4',
    description: 'This is My first Product ',
    image : require('./assets/img3.png')
  },
  {
    id:4,
    title:'Product 4',
    description: 'This is My first Product ',
    image : require('./assets/img3.png')
  },
  {
    id:4,
    title:'Product 4',
    description: 'This is My first Product ',
    image : require('./assets/img3.png')
  },
  {
    id:4,
    title:'Product 4',
    description: 'This is My first Product ',
    image : require('./assets/img3.png')
  },
  {
    id:4,
    title:'Product 4',
    description: 'This is My first Product ',
    image : require('./assets/img3.png')
  },
]

const ProductCard=({item,onPress}:{item: typeof products[0];onPress :()=> void})=>{
  return(
  <TouchableOpacity onPress={onPress}>
    <View style={style.card}>
      <Image  style={style.image} source={item.image} />
      <Text style={style.title}>{item.title}</Text>
      <Text style={style.description}>{item.description}</Text>
    </View>

  </TouchableOpacity>
  );
}


const App=()=>{

  const handlepress =(item :any)=>{
    console.log('pressed Item',item.title);
  }
  return(
    <View style={style.container}>
      <Text style={{ fontSize: 20, color: 'black' }}>Welcome to my Store</Text>
      <FlatList 
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => handlepress(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={style.row}
        contentContainerStyle={style.flatlistcontent}
      />
    </View>

  );
};

const style=StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor:"#f2f2f2"
  },
  card:{
    backgroundColor:'#fff',
    borderRadius:10,
    padding:10,
    alignItems:'center',
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowOffset:{width:0,height:2}
    
  },
  flatlistcontent:{
    paddingBottom:10,
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:5
  },
  image:{
    width:'100%',
    height:100,
    borderRadius:10,
    marginBottom:10

  },
  title:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:5

  },
  description:{
    fontSize:14,
    color:'#666',
    textAlign:'center'
  }
})

export default App;