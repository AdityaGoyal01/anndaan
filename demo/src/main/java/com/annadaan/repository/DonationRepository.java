package com.annadaan.repository;

import com.annadaan.model.Donation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonationRepository extends MongoRepository<Donation, String> {
}
