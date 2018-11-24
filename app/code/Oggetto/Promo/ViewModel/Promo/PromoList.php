<?php

namespace Oggetto\Promo\ViewModel\Promo;

use Magento\Framework\Serialize\Serializer\Json;
use Magento\Framework\View\Element\Block\ArgumentInterface;

class PromoList implements ArgumentInterface
{
    private $json;

    public function __construct(Json $json)
    {
        $this->json = $json;
    }

    public function getPromotions(): array
    {
        return [
            'TODAY 30% off for t-shirts',
            'Tomorrow 20% off for hats',
            'BUY 3 things – 1 for free'
        ];
    }

    public function getPromotionsJson(): string
    {
        return $this->json->serialize($this->getPromotions());
    }
    
    public function getDetailedPromotionJson(): string
    {
        return $this->json->serialize(
            [
                [
                    'label'       => 'TODAY 30% off for t-shirts',
                    'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ' .
                        'tempor incididunt ut labore et dolore magna aliqua.'
                ],
                [
                    'label'       => 'Tomorrow 20% off for hats',
                    'description' => ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' .
                        'aliquip ex ea commodo consequat. '
                ],
                [
                    'label'       => 'BUY 3 things – 1 for free',
                    'description' => 'Duis aute irure dolor in reprehenderit in voluptate velit' .
                        ' esse cillum dolore eu fugiat nulla pariatur.'
                ]
            ]
        );
    }
}
