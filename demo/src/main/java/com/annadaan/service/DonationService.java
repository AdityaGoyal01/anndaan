package com.annadaan.service;

import com.annadaan.model.Donation;
import com.annadaan.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonationService {
    @Autowired
    private DonationRepository donationRepository;

    public Donation saveDonation(Donation donation) {

        return donationRepository.save(donation);
    }

    public List<Donation> getAllDonations() {
        return donationRepository.findAll();

    }
}
