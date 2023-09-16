import React from "react";
import axios from "axios";
import { Container, Rating, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useRouter } from 'next/router';
import Navbar from '../../layouts/Nav'
import  Button  from "@/components/ButtonComp";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Details({ product }) {
  console.log(product, "product");
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
    <Navbar> </Navbar>
    <Container maxWidth="xl">
    <Stack direction="row" spacing={2} sx={{margin:'50px 0px'}}> 
    <Typography variant="body1" gutterBottom onClick={handleGoBack} sx={{cursor:'pointer'}}>
        back/
      </Typography>
    <Typography variant="body1" gutterBottom >
        {product?.name}
      </Typography>
      </Stack>
    <Stack direction="row" spacing={2}> 
    <Stack spacing={2}><img src={product?.images[0]} sx={{width:'510px' , height:'510px'}}/> </Stack>
    <Stack spacing={2}>
    <Stack direction="row"  justifyContent="space-between" spacing={2}> 

      <Typography variant="h4" gutterBottom>
        {product?.name}
      </Typography>
      <Typography variant="h4" gutterBottom sx={{fontWeight:'bold'}}>
        {product?.price}$
      </Typography>
      </Stack>
      <Rating name="size-medium" defaultValue={product?.rating} readOnly size="large" />

      <Typography variant="h6" gutterBottom>
        Color: {product?.colors[0]}
      </Typography>
      <Stack direction="row" spacing={2}>
        {product?.colors?.map((color) => (
          <Paper
            sx={{
              backgroundColor: color,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          ></Paper>
        ))}
      </Stack>
      <Typography variant="body1" gutterBottom>
        {product?.description}
      </Typography>
      <Button children='Add to cart' styleBackground={false}/>
      </Stack>
      </Stack>
      <Typography variant="h4" gutterBottom mt={5}>
        Reviews
      </Typography>
      <Stack spacing={2}>
        {product?.reviews?.map((review) => (
          <Item sx={{padding:'10px'}}>
            <Typography variant="h6" gutterBottom>
              {review?.name}
            </Typography>
            <Stack direction="row"   justifyContent="space-between" alignItems="center"
>
              <Rating
                name="size-medium"
                defaultValue={product?.rating}
                readOnly
              />
                <Typography variant="subtitle2" gutterBottom>
              {review?.createdAt}
            </Typography>
           
            </Stack>
            <Typography variant="body2" gutterBottom>
              {review?.comment}
            </Typography>
          </Item>
        ))}
      </Stack>
      </Container>
     
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(
      `https://prohop-express.herokuapp.com/api/products/${params.id}`
    );
    const product = response.data;

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return {
      props: {
        product: null,
      },
    };
  }
}
