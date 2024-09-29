import React from "react";
import { Container, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import abum1 from "../../../assets/abum1.png"
import abum2 from "../../../assets/abum2.png"
import abum3 from "../../../assets/abum3.png"
import abum4 from "../../../assets/abum4.png"

const AboutUs = () => {
  const teamMembers = [
    { name: "Nguyễn Đình Tú", role: "Lead Developer", image: abum1 },
    { name: "Lê Duy Tâm", role: "UI/UX Designer", image: abum2 },
    { name: "Nguyễn Vinh Quang", role: "Backend Developer", image: abum3 },
    { name: "Lê Hoàng Tuấn ", role: "Marketing Specialist", image: abum4 },
  ];

  return (
    <Container maxWidth="lg" className="mt-10 mb-20">
      <Typography variant="h3" align="center" gutterBottom className="text-blue-600 font-bold">
        About Us
      </Typography>
      <Typography variant="body1" align="center" paragraph className="mb-8 text-gray-600">
        Welcome to our fashion clothing store! We are a dedicated team of four passionate individuals,
        working together to create an online platform that offers the latest and most stylish fashion clothing.
        Our mission is to provide trendy, high-quality, and affordable clothes for everyone.
      </Typography>



      <Typography variant="h4" className="text-blue-500 font-semibold mt-16 mb-4">
        Our Mission
      </Typography>
      <Typography variant="body1" className="text-gray-600">
        We aim to become a leading fashion brand, known for offering the latest trends and a wide range of stylish clothing.
        Our online store is designed to be user-friendly, ensuring a seamless shopping experience for all our customers.
      </Typography>

      <Typography variant="h4" className="text-blue-500 font-semibold mt-16 mb-4">
        Why Choose Us?
      </Typography>
      <Typography variant="body1" className="text-gray-600">
        We prioritize quality, affordability, and customer satisfaction. Our collections are carefully curated to provide
        the most fashionable items for every occasion, whether it's casual wear, work attire, or party outfits.
      </Typography>
      <Typography variant="body1" className="text-gray-600">
        We prioritize quality, affordability, and customer satisfaction. Our collections are carefully curated to provide
        the most fashionable items for every occasion, whether it's casual wear, work attire, or party outfits.
      </Typography>
      <Typography variant="body1" className="text-gray-600">
        We prioritize quality, affordability, and customer satisfaction. Our collections are carefully curated to provide
        the most fashionable items for every occasion, whether it's casual wear, work attire, or party outfits.
      </Typography>

      <Typography variant="h4" className="text-blue-500 font-semibold mt-10 mb-6">
        Meet Our Team
      </Typography>

      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="hover:shadow-lg transition duration-300 ease-in-out">
              <CardMedia
                component="img"
                image={member.image}
                alt={member.name}
                className="object-cover h-[250px] w-full"
              />

              <CardContent>
                <Typography variant="h6" className="text-gray-800">
                  {member.name}
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutUs;
