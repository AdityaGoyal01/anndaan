package com.annadaan.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.*;

@Document(collection = "donations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Donation {
    @Id
   
    private String id;

    private String foodName;
    private String quantity;
    private int shelfLife;
    private String description;
    private String donorName;

    public String getFoodName() { return foodName; }
    public void setFoodName(String foodName) { this.foodName = foodName; }

    public String getQuantity() { return quantity; }
    public void setQuantity(String quantity) { this.quantity = quantity; }

    public int getShelfLife() { return shelfLife; }
    public void setShelfLife(int  shelfLife) { this.shelfLife = shelfLife; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getDonorName() { return donorName; }
    public void setDonorName(String donorName) { this.donorName = donorName; }
}
