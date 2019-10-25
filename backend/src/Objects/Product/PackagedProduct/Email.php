<?php


namespace KinicartExample\Objects\Product\PackagedProduct;


use Kinicart\Objects\Product\PackagedProduct\Feature;
use Kinicart\Objects\Product\PackagedProduct\PackagedProduct;

/**
 * Class Email
 * @package KinicartExample\Objects\Product\PackagedProduct
 *
 * @noGenerate
 */
class Email implements PackagedProduct {


    /**
     * Get a list of features which this product makes available.  Features are combined
     * into packages for sale purposes.
     *
     * @return Feature[]
     */
    public function getFeatures() {
        return [
            new Feature("storage", "Storage (GB)", "The amount of storage space included per user"),
            new Feature("users", "Users", "The number of users currently enabled for email"),
            new Feature("includedBandwidth", "Included Bandwidth (GB/month)", "The amount of included bandwidth in GB/Month"),
            new Feature("additionalBandwidth", "Additional Bandwidth (GB/month)", "Additional bandwidth per GB"),
            new Feature("additionalStorage", "Additional Storage (GB)", "Additional storage"),
            new Feature("excessBandwidth", "Excess Bandwidth (GB/month)", "Excess bandwidth charges - additional GBs", Feature::TYPE_EXCESS),
            new Feature("excessStorage", "Excess Storage (GB)", "Excess storage charges - additional GBs", Feature::TYPE_EXCESS)
        ];
    }

    /**
     * Get the title for this product
     *
     * @return string
     */
    public function getTitle() {
        return "Email";
    }

    /**
     * Get the description for this product
     *
     * @return string
     */
    public function getDescription() {
        return "Email Service";
    }
}
